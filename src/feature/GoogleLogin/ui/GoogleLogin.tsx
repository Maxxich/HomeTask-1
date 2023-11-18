'use client'
import { Button } from '@/shared/ui/Button';
import GoogleSvg from '@/shared/assets/svg/Google.svg'

interface IGoogleLoginProps {
    className?: string
}

export const GoogleLogin: React.FunctionComponent<IGoogleLoginProps> = ({
    className
}) => {

    const onClick = () => {
        setTimeout(() => {
            alert('Google login mock ')
        }, 300)
    }

    return (
        <Button
            variant='dark'
            addonLeft={<GoogleSvg/>}
            className={className}
            onClick={onClick}
        >
        Продолжить с Google
        </Button>
    );
};
