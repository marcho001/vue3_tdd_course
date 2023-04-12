import SignUpPage from './SignUpPage.vue'
import { render, screen } from '@testing-library/vue'
console.log(SignUpPage)
it('has sign up header ', () => {
  render(SignUpPage)
  const header = screen.queryByRole('heading', { name: 'Sign Up' })
  expect(header).not.toBeNull()
})
