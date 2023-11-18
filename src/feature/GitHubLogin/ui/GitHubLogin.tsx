'use client'

import { Button } from '@/shared/ui/Button';
import GitHubSvg from '@/shared/assets/svg/GitHub.svg'

interface IGitHubLoginProps {
    className?: string
}

export const GitHubLogin: React.FunctionComponent<IGitHubLoginProps> = ({
    className
}) => {

    const onClick = () => {
        setTimeout(() => {
            alert('GitHub login mock ')
        }, 300)
    }

    return (
        <Button
            variant='dark'
            addonLeft={<GitHubSvg/>}
            className={className}
            onClick={onClick}
        >
        Продолжить с GitHub
        </Button>
    );
};
