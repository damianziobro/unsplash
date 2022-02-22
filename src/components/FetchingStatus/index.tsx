import './index.scss';

interface Props {
    status: string
}

export const FetchingStatus = ({ status }: Props ) => {
    return (
        <span className={'FetchingStatus'}>{status}</span>
    )
}