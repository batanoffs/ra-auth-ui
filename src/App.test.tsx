import React from 'react'
import { render } from '@testing-library/react'
import { AuthAdmin } from './AuthAdmin'
import { expect, test } from 'vitest'

test('App tests', () => {
    test('should render the title', () => {
        const { container } =  render(<AuthAdmin />)

        expect(
            container.getByRole('heading', {
                level: 1,
            })
        ).toEqual('Vite + React')
    })
})
