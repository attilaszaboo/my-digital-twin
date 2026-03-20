import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('renders the profile name', () => {
    render(<App />)
    expect(screen.getAllByText('Attila Szabo').length).toBeGreaterThan(0)
  })

  it('renders the sidebar navigation', () => {
    render(<App />)
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
    expect(screen.getAllByText('About').length).toBeGreaterThan(0)
  })

  it('renders key experience entries', () => {
    render(<App />)
    expect(screen.getByText('NVIDIA')).toBeInTheDocument()
    expect(screen.getByText('Autodesk')).toBeInTheDocument()
  })

  it('renders education section', () => {
    render(<App />)
    expect(screen.getByText('Concordia University')).toBeInTheDocument()
    expect(screen.getByText('Technical University of Cluj Napoca')).toBeInTheDocument()
  })

  it('renders projects section', () => {
    render(<App />)
    expect(screen.getByText('AI Assistant Bug Triage System')).toBeInTheDocument()
    expect(screen.getByText('Safe Scene Script Execution')).toBeInTheDocument()
  })

  it('renders certifications in sidebar', () => {
    render(<App />)
    expect(screen.getByText('AWS Certified Cloud Practitioner')).toBeInTheDocument()
  })
})
