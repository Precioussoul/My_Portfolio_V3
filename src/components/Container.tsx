'use client'

import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  &::before,
  &::after {
    padding: 0;
    margin: 0;
  }
`
