import { Input } from "../../InputComponents/Input"
import { FormProvider, useForm } from 'react-hook-form'

export const Form = () => {
  const methods = useForm()

  const onSubmit = methods.handleSubmit((data: any) => {
    console.log(data)
  })

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={e => e.preventDefault()}
        noValidate
        autoComplete="off"
        className="container"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Input
            label="name"
            name="name"
            type="text"
            id="name"
            placeholder="type your name..."
            validation={{
              required: {
                value: true,
                message: 'required',
              },
            }}
          />
          <Input
            label="password"
            name="password"
            type="password"
            id="password"
            placeholder="type your password..."
            validation={{
              required: {
                value: true,
                message: 'required',
              },
              minLength: {
                value: 6,
                message: 'min 6 characters',
              },
            }}
          />
        </div>
        <div className="mt-5">
          <button
            onClick={onSubmit}
            className="flex items-center gap-1 p-5 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-800"
          >
            Submit Form
          </button>
        </div>
      </form>
    </FormProvider>
  )
}