import type { ComponentPropsWithoutRef } from 'react'

import { visuallyHidden } from '@/styles/shared.css'

type ExternalLinkProps = Omit<ComponentPropsWithoutRef<'a'>, 'target' | 'rel'>

const ExternalLink = ({ children, ...props }: ExternalLinkProps) => (
  <a {...props} target="_blank" rel="noopener noreferrer">
    {children}
    <span className={visuallyHidden}> (opens in a new tab)</span>
  </a>
)

export default ExternalLink
