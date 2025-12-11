import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import DepartmentCard from '../DepartmentCard';

const mockDepartment = {
  id: 'test-dept',
  title: 'Test Department',
  summary: 'This is a test department summary.',
  description: 'This is a longer description of the test department that appears when expanded.',
  icon: '🔧'
};

describe('DepartmentCard', () => {
  it('renders department information', () => {
    render(<DepartmentCard department={mockDepartment} />);
    
    expect(screen.getByText('Test Department')).toBeInTheDocument();
    expect(screen.getByText('This is a test department summary.')).toBeInTheDocument();
  });

  it('expands and collapses on button click', () => {
    render(<DepartmentCard department={mockDepartment} />);
    
    const button = screen.getByRole('button', { name: /learn more/i });
    const description = screen.getByText('This is a longer description of the test department that appears when expanded.');
    
    // Initially collapsed
    expect(description).toHaveClass('max-h-0');
    
    // Expand
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText('Show Less')).toBeInTheDocument();
    
    // Collapse
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(screen.getByText('Learn More')).toBeInTheDocument();
  });

  it('expands and collapses on keyboard Enter key', () => {
    render(<DepartmentCard department={mockDepartment} />);
    
    const button = screen.getByRole('button', { name: /learn more/i });
    
    // Expand with Enter
    fireEvent.keyDown(button, { key: 'Enter', code: 'Enter' });
    expect(button).toHaveAttribute('aria-expanded', 'true');
    
    // Collapse with Enter
    fireEvent.keyDown(button, { key: 'Enter', code: 'Enter' });
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  it('expands and collapses on keyboard Space key', () => {
    render(<DepartmentCard department={mockDepartment} />);
    
    const button = screen.getByRole('button', { name: /learn more/i });
    
    // Expand with Space
    fireEvent.keyDown(button, { key: ' ', code: 'Space' });
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });
});

