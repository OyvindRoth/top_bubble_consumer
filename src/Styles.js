import { css } from 'lit-element';

export function Styles() {
  return css`
body {
     margin: 0;
     color: #3E3832;
     font-family: 'Source Sans Pro', Arial, sans-serif;
     height: 100%;
}


button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-family: 'Source Sans Pro', Arial, sans-serif;
    font-size: 1em;
    white-space: nowrap;
    border-radius: 0.125em;
    cursor: pointer;
    user-select: none;
    letter-spacing: 0.0625em;
    line-height: 1.375rem;
    text-transform: uppercase;
    text-decoration: none;
    background-color: transparent;
    padding: calc(.475rem - 1px) 2.5rem calc(.525rem - 1px) 2.5rem;
    min-height: 2.5rem;
    vertical-align: middle;
    border: 2px solid #0067C5;
    color: #0067C5;
}
button:disabled,
button:disabled {
    background-color: gray;
    border: none;
    color: #070809;
}
`
}
