import { Logo, SigninBackground } from "@/components/icons";
import { getImgSource } from "@/utils";
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Input } from "@nextui-org/react";
import { useTheme } from "next-themes";
import Router from "next/router";
import { useState } from "react";

export default function SigninPage() {
    const { theme, setTheme } = useTheme()

    const [menu, setMenu] = useState<"signin" | "signup">("signin")

    const handleRegister = () => {
    }

    const handleLogin = () => {
        Router.push("/")
    }

    const signInCard = (
        <Card className="w-full h-2/3 sm:w-[32rem] sm:h-[26rem] p-6 bg-default-50/50">
            <CardHeader className="flex justify-center">
                <div className="flex gap-4 justify-center">
                    <Logo size={48} theme={theme} />
                    <Divider orientation="vertical" className="h-8 my-auto" />
                    <div className="my-auto text-sm tracking-widest ml-2">
                        <p>有涯</p>
                        <p>智教</p>
                    </div>
                </div>
            </CardHeader>
            <CardBody>
                <div className="flex flex-col gap-4">
                    <Input
                        placeholder="用户名"
                        type="text"
                    >
                    </Input>
                    <Input
                        placeholder="密码"
                        type="password"
                    >
                    </Input>
                </div>
            </CardBody>
            <CardFooter>
                <div className="flex flex-col w-full gap-4">
                    <Button
                        className="w-full"
                        color="primary"
                        variant="flat"
                        onClick={handleLogin}
                    >
                        登录
                    </Button>
                    <div className="text-center text-sm text-default-600">
                        还没有账号？
                        <span className="text-primary hover:text-primary/75 hover:underline underline-offset-2 cursor-pointer"
                            role="presentation"
                            onClick={() => {
                                setMenu("signup")
                            }}
                        >
                            注册
                        </span>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )

    const signUpCard = (
        <Card className="w-full h-2/3 sm:w-[32rem] sm:h-[26rem] p-6 bg-default-50/50">
            <CardHeader className="flex justify-center">
                <div className="flex gap-4 justify-center">
                    <Logo size={48} theme={theme} />
                    <Divider orientation="vertical" className="h-8 my-auto" />
                    <div className="my-auto text-sm tracking-widest ml-2">
                        <p>有涯</p>
                        <p>智教</p>
                    </div>
                </div>
            </CardHeader>
            <CardBody>
                <div className="flex flex-col gap-4">
                    <Input
                        placeholder="用户名"
                        type="text"
                    >
                    </Input>
                    <Input
                        placeholder="密码"
                        type="password"
                    >
                    </Input>
                    <Input
                        placeholder="确认密码"
                        type="password"
                    >
                    </Input>
                </div>
            </CardBody>
            <CardFooter>
                <div className="flex flex-col w-full gap-4">
                    <Button
                        className="w-full"
                        color="primary"
                        variant="flat"
                        onClick={handleRegister}
                    >
                        注册
                    </Button>
                    <div className="text-center text-sm text-default-600">
                        已有账号？
                        <span className="text-primary hover:text-primary/75 hover:underline underline-offset-2 cursor-pointer"
                            role="presentation"
                            onClick={() => {
                                setMenu("signin")
                            }}
                        >
                            登录
                        </span>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )

    return (
        <section className="relative flex flex-col lg:flex-row h-screen bg-gradient-to-br from-cyan-200 to-violet-200 items-center justify-center gap-[6rem] py-8 px-4 md:py-10">
            {
                menu === "signin"
                    ? signInCard
                    : signUpCard
            }
        </section>
    )
}