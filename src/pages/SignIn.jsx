
import { useForm } from "react-hook-form"
import CardAuth from "../components/cardAuth"
import { Alert, Box, Field, Input, Stack } from "@chakra-ui/react"
import { usernameValidation } from "../lib/validation"
import { useSignInMutation } from "../services/auth"
import useRedirect from "../hooks/useRedirect"

const SignIn = () => {
    const [signIn, { isError, error, isSuccess }] = useSignInMutation()
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm()

    function onSubmit(values) {
        signIn(values)
        return null
    }

    useRedirect(isSuccess, '/')



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
                <Input  {...register('password', {
                    required: 'Це поле є обов\'язковим',
                })} />
                {errors.password && <Field.ErrorText>{errors.password.message}</Field.ErrorText>}
            </Field.Root>
        </Stack>
        {isError && <Alert.Root width={"300px"} position={"fixed"} bottom={"10px"} right={"10px"} status="error">
            <Alert.Indicator />
            <Alert.Title>{error.data.message}</Alert.Title>
        </Alert.Root>}
    </CardAuth>
   
};

export default SignIn;

