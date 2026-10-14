import { Component, type ReactNode } from 'react'

import { buttonPrimary } from '@/styles/shared.css'
import {
  errorBoundaryContainer,
  errorBoundaryHeading,
  errorBoundaryText,
} from './ErrorBoundary.css'

type ErrorBoundaryProps = {
  children: ReactNode
}

type ErrorBoundaryState = {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children
    }

    return (
      <main className={errorBoundaryContainer}>
        <h1 className={errorBoundaryHeading}>Something went wrong</h1>
        <p className={errorBoundaryText}>
          Sorry, something went wrong while loading this page. Reloading usually
          fixes it.
        </p>
        <button
          type="button"
          className={buttonPrimary}
          onClick={() => window.location.reload()}
        >
          Reload the page
        </button>
      </main>
    )
  }
}

export default ErrorBoundary
