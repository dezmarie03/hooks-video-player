import styled from 'styled-components';

const StyledThemeToggle = styled.div`
  font-size: 1.6em;
  color: ${props => props.theme.textColor};
  padding: 0;
  margin: 1rem;
  display: flex;
  align-items: center;

  .switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 24px;
    margin-left: .5rem;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
    background-color: ${props => props.theme.bgSwitchInactiveColor};
    transition: 0.4s;
  }

  .slider:before {
    content: '';
    position: absolute;
    left: 4px;
    bottom: 4px;
    width: 16px;
    height: 16px;
    background-color: ${props => props.theme.bgSwitchHandleColor};
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: ${props => props.theme.bgSwitchActiveColor};
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    transform: translateX(16px);
  }

  .slider.round {
    border-radius: 30px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

export default StyledThemeToggle;
