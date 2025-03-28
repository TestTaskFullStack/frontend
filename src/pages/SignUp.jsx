
import ButtonUI from "../components/button"
import { useForm } from "react-hook-form"
import CardAuth from "../components/cardAuth"
import { Field, Input, Stack } from "@chakra-ui/react"
import { usernameValidation, emailValidation, passwordValidation } from "../lib/validation"
const SignUp = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm()

    function onSubmit(values) {
        return new Promise((resolve) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                resolve()
            }, 0)
        })
    }



    return <CardAuth handleSubmit={handleSubmit} onSubmit={onSubmit} title="РЕЄСТРАЦІЯ" description="Спробуй нові відчуття" link="/signin" linkText="Вхід" buttonText="Зареєструватися" >
        <Stack gap="4" w="full">
            <Field.Root invalid={errors.name} required>
                <Field.Label>
                    Нікнейм
                    <Field.RequiredIndicator />
                </Field.Label>
                <Input  {...register('username', usernameValidation)} />
                {errors.name && <Field.ErrorText>{errors.name.message}</Field.ErrorText>}
            </Field.Root>
            <Field.Root invalid={errors.email} required>
                <Field.Label>
                    Email
                    <Field.RequiredIndicator />
                </Field.Label>
                <Input  {...register('email', emailValidation)} />
                {errors.email && <Field.ErrorText>{errors.email.message}</Field.ErrorText>}
            </Field.Root>
            <Field.Root invalid={errors.password} required>
                <Field.Label>
                    Пароль
                    <Field.RequiredIndicator />
                </Field.Label>
                <Input  {...register('password', passwordValidation)} />
                {errors.password && <Field.ErrorText>{errors.password.message}</Field.ErrorText>}
            </Field.Root>
        </Stack>
    </CardAuth>
};

export default SignUp;

