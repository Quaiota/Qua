import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { HTMLInputTypeAttribute, LegacyRef, useState } from 'react';
import CloseIcon from '../../atom/icons/Close';
import EyeIcon from '../../atom/icons/EyeIcon';
import TextWrap from '../../atom/typography/TextWrap';

export interface ISettingInput extends React.HTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  icon?: React.ReactNode;
  description?: string;
  pillText?: string;
  type?: HTMLInputTypeAttribute | undefined;
  ref?: LegacyRef<HTMLInputElement> | undefined;
}
const SettingInput: React.FC<ISettingInput> = ({
  name,
  label,
  icon: Icon,
  description,
  pillText,
  type,
  ...rest
}) => {
  const color = useTheme();
  const [isVisible, setVisibility] = useState(false);

  const mouseDown = () => setVisibility(true);
  const mouseUp = () => setVisibility(false);

  return (
    <StyledSettingInput>
      <div className='labelbox'>
        <label htmlFor={name}>{label}</label>
        {Icon && <CloseIcon />}
      </div>

      <div
        className='subtext'
        style={!description ? { visibility: 'hidden' } : {}}>
        <TextWrap fontSize='bodymd' color={color.primary.sea3}>
          Connect a public key to your Qua address
        </TextWrap>
      </div>

      <div className='handle' style={!pillText ? { display: 'none' } : {}}>
        <TextWrap fontSize='bodysm'>@roosevelt</TextWrap>
      </div>

      <div className='inputbox'>
        {type === 'password' ? (
          <div>
            <input
              id={name}
              className='inputfield'
              {...rest}
              type={isVisible ? 'text' : 'password'}
            />
            <motion.button
              type='button'
              className='eyeicon'
              onMouseDown={mouseDown}
              onMouseUp={mouseUp}
              onTouchStart={mouseDown}
              onTouchEnd={mouseUp}
              initial={{ scale: 1 }}
              whileTap={{ scale: 0.8 }}>
              <EyeIcon />
            </motion.button>
          </div>
        ) : (
          <input id={name} className='inputfield' {...rest} type={type} />
        )}
      </div>
    </StyledSettingInput>
  );
};

const StyledSettingInput = styled.div`
  .eyeicon {
    padding: 0.6rem;
    cursor: pointer;
    border: none;
    background: none;
    position: absolute;
    top: 15px;
    right: 10px;
  }

  .inputbox {
    div {
      position: relative;
    }
  }

  .labelbox {
    display: flex;
    justify-content: space-between;
    label {
      color: ${({ theme }) => theme.primary.sea3};
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
    }
  }
  .subtext {
  }
  .handle {
    width: fit-content;
    padding: 0.4rem 0.8rem;
    background: ${({ theme }) => theme.primary.white + '11'};
    border-radius: 50px;
    margin-top: 12px;
  }
  .inputfield {
    width: 100%;
    background: ${({ theme }) => theme.primary.white + '00'};
    border: none;
    border-bottom: ${({ theme }) => theme.primary.white + '31'} 1px solid;
    transition: all 0.23s ease-in;
    padding-inline: 6px;
    padding-top: 1rem;
    padding-bottom: 6px;
    margin-top: 12px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.primary.white + 'e1'};
    ::placeholder {
      color: ${({ theme }) => theme.primary.white + 'a1'};
    }
    :hover,
    :focus {
      background: ${({ theme }) => theme.primary.white + '09'};
    }
  }
`;

export default SettingInput;
