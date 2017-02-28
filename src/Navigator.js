import { browserHistory } from 'react-router'

/**
 * Change to a new URI in the same way a <Link ... /> element works
 *
 * @param uri Path to navigate to
 */
export function navigate(uri) {
  browserHistory.push(uri)
}
