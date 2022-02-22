export const ListingIcon = ({className}: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            className={className}
        >
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M16.303 2.75H7.654C4.64 2.75 2.75 4.884 2.75 7.904v8.15c0 3.02 1.881 5.153 4.904 5.153h8.648c3.024 0 4.905-2.134 4.905-5.154V7.904c0-3.02-1.88-5.154-4.904-5.154z"
            ></path>
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M10.703 8.786a1.847 1.847 0 11-3.693-.001 1.847 1.847 0 013.693.001zM21.207 14.95c-.994-.864-1.86-1.905-3-2.592-1.141-.688-2.368-.264-3.16.761-.765.992-1.243 2.325-2.398 2.95-1.423.77-2.26-.472-3.446-.97-1.325-.556-2.331.442-3.105 1.401-.775.96-1.56 1.91-2.348 2.86"
            ></path>
        </svg>
    );
}