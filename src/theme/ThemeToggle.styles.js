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

  .switch[aria-checked="true"] .slider {
    background-color: ${props => props.theme.bgSwitchActiveColor};
  }

  .switch[aria-checked="true"] .slider:before {
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
