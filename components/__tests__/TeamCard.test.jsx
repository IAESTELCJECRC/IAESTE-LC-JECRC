import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import TeamCard from '../TeamCard';

const mockMember = {
  id: 'test-member',
  name: 'Test Member',
  role: 'Test Role',
  bio: 'This is a test bio for the team member.',
  img: '/assets/team/test-member.jpg'
};

const mockMemberNoBio = {
  id: 'test-member-2',
  name: 'Test Member 2',
  role: 'Member',
  img: '/assets/team/test-member-2.jpg'
};

describe('TeamCard', () => {
  it('renders member information', () => {
    render(<TeamCard member={mockMember} />);
    
    expect(screen.getByText('Test Member')).toBeInTheDocument();
    expect(screen.getByText('Test Role')).toBeInTheDocument();
  });

  it('opens modal when card with bio is clicked', async () => {
    render(<TeamCard member={mockMember} />);
    
    const card = screen.getByRole('button', { name: /view test member's profile/i });
    
    fireEvent.click(card);
    
    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument();
      expect(screen.getByText('Test Member')).toBeInTheDocument();
      expect(screen.getByText('This is a test bio for the team member.')).toBeInTheDocument();
    });
  });

  it('closes modal when close button is clicked', async () => {
    render(<TeamCard member={mockMember} />);
    
    const card = screen.getByRole('button', { name: /view test member's profile/i });
    fireEvent.click(card);
    
    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
    
    const closeButton = screen.getByLabelText('Close modal');
    fireEvent.click(closeButton);
    
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  it('opens modal on Enter key press for member with bio', async () => {
    render(<TeamCard member={mockMember} />);
    
    const card = screen.getByRole('button', { name: /view test member's profile/i });
    
    fireEvent.keyDown(card, { key: 'Enter', code: 'Enter' });
    
    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
  });

  it('does not open modal for member without bio', () => {
    render(<TeamCard member={mockMemberNoBio} />);
    
    const card = screen.getByRole('article');
    expect(card).toHaveAttribute('tabIndex', '-1');
    
    fireEvent.click(card);
    
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});

