import React from 'react';
import classnames from 'classnames';
import { HelpText } from 'components/tailwind';

const TextField = ({
  id,
  label,
  onChange,
  helpText,
  helpTextState,
  fullWidth = false,
  ...rest
}) => {
  const htmlId = id ? id : Math.random().toString(36).slice(2);

  const onInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="sm:col-span-2">
      <label htmlFor={htmlId} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div>
        <input
          id={htmlId}
          onChange={onInputChange}
          {...rest}
          className={
            classnames('py-3 px-4 block shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md', {
              'w-full': fullWidth,
            })
          }
        />
        <HelpText message={helpText} state={helpTextState} />
      </div>
    </div>
  );
};

export default TextField;
