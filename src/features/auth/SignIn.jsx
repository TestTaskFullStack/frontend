
import { useForm } from "react-hook-form"
import CardAuth from "./components/cardAuth"
import { Alert, Box, Field, Input, Stack } from "@chakra-ui/react"
import { usernameValidation } from "../../lib/validation"
import { useSignInMutation } from "../../services/auth"
import { useEffect } from "react"
import { Toaster } from "../../components/ui/toaster"
import useToasterError from "./hooks/useToasterError"
import { useNavigate } from "react-router-dom"
const SignIn = () => {
    const [signIn, { isError, error, isSuccess, data }] = useSignInMutation()
    const navigate = useNavigate()
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm()

    function onSubmit(values) {
        signIn(values)
        return null
    }


    useToasterError(isError, error)
    useEffect(() => {
        if (isSuccess) {
            localStorage.setItem("auth_token", data.accessToken)
            navigate('/')  
            window.location.reload();
        }
    }, [data, isSuccess, isError, error, navigate])
    


    return <CardAuth handleSubmit={handleSubmit} onSubmit={onSubmit} title="ВХІД" description="Спробуй нові відчуття" link="/signup" linkText="Зареєструватися" buttonText="Вхід" >
        <Stack gap="4" w="full">
            <Field.Root invalid={errors.name} required>
                <Field.Label>
                    Нікнейм
                    <Field.RequiredIndicator />
                </Field.Label>
                <Input  {...register('username', usernameValidation)} />
                {errors.name && <Field.ErrorText>{errors.name.message}</Field.ErrorText>}
            </Field.Root>
            <Field.Root invalid={errors.password} required>
                <Field.Label>
                    Пароль
                    <Field.RequiredIndicator />
                </Field.Label>
                <Input type="password" {...register('password', {
                    required: 'Це поле є обов\'язковим',
                })} />
                {errors.password && <Field.ErrorText>{errors.password.message}</Field.ErrorText>}
            </Field.Root>
        </Stack>
    
    </CardAuth>

};

export default SignIn;

