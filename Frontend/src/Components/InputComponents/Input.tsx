
import { useFormContext } from 'react-hook-form'
import * as React from "react"
import {isFormInvalid } from './isFormInvalid'
import {findInputError } from './findInputError'
import { AnimatePresence } from 'framer-motion'
import { MdError} from 'react-icons/md'


type TextInputProps = {
	label: string;
	type: string;
    name : string;
	placeholder: string;
	id:string;
    validation:any;
}

 export const Input = (props: TextInputProps) : React.JSX.Element => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const inputError = findInputError(errors, props.label) as { error: { message: any } };

  const isInvalid = isFormInvalid(inputError)

  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex justify-between">
        <label htmlFor={props.id} className="font-semibold capitalize">
          {props.label}
        </label>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputError.error.message}
              key={inputError.error.message}
            />
          )}
        </AnimatePresence>
      </div >
      <input
        id={props.id}
        type={props.type}
        className="w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
        placeholder={props.placeholder}
        {...register(props.label, {
          required: {
            value: true,
            message: 'required',
          },pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'Invalid email address'}
        })}
      />
    </div>
  )

  
}

const InputError: ({ message }: { message: any; }) => JSX.Element = ({ message }) => {
    return (
        <div
          className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md"
          {...framer_error}>
          {message}
          <MdError/>
          </div>
      )
}

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
}

