import {Stack, Grid} from '@mui/material';
import Box from '@mui/material/Box';
import { MuiSignUpButton } from '../../Button/Button';
import { Link } from 'react-router-dom';
import { Input } from '../../InputComponents/Input'
import { FormProvider, useForm } from 'react-hook-form'


const SignUpPage1 = (): React.JSX.Element => {

    const methods = useForm()

    const onSubmit = methods.handleSubmit((data: any) => {
      console.log(data)
    })
    
    return ( 
        <div className='w-full h-full'>

        <Box 
        height={window.innerHeight}
        width={window.innerWidth}
        display="flex"
        alignItems="start"
        flexDirection="column"
        sx={{ bgcolor: '#FFFFFF' }}
        >
            <Stack direction = 'row' sx={{ flexGrow: 1}}>
                <Box 
                height = '100%'
                width={window.innerWidth/2}
                display="flex"
                alignItems="start"
                gap={2}
                p={8}
                flexDirection="column"
                sx={{ bgcolor: '#512888', justifyContent: 'center' }}
                >
                    <Box
                    color='#FFFFFF'
                    fontSize={40}
                    textAlign='center'
                    >
                    Welcome!
                    </Box>
                    <Box
                    color='#FFFFFF'
                    fontSize={28}
                    >
                    Create an account for the K-State Computer Science Conference
                    </Box>
                </Box>
                <Box 
                height = '100%'
                width={window.innerWidth/2}
                display="flex"
                alignItems="start"
                gap={2}
                p={8}
                flexDirection="column"
                sx={{ justifyContent: 'center' }}
                >
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item>
                <FormProvider {...methods}>
                <form
                  onSubmit={e => e.preventDefault()}
                  noValidate
                  autoComplete="off"
                  className="container content-center"
                >
                  <div className="grid gap-5 md:grid-cols-2 ">
                    <Input
                      label="email"
                      name="email"
                      type="text"
                      id="email"
                      placeholder="type your email..."
                      validation={{
                        required: {
                          value: true,
                          message: 'required',
                        }
                        
                      }}
                    />
                  </div>
                  <div className="mt-5 al ">
                    <button
                      onClick={onSubmit}
                      className="flex items-center gap-1 p-4 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-800"
                    >
                      Sign In
                    </button>
                      <>Need Help? </>
                      <Link to="https://example.com/" style={{ color: '#0070E0' }}>Contact Us!</Link>

                  </div>
                </form>
              </FormProvider>
                        </Grid>
                    </Grid>

                </Box>
                
            </Stack>
        </Box>
        </div>
        

    );
};

export default SignUpPage1;