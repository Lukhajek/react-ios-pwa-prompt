type Props = {
    appIconPath: string;
    copySubtitle: string;
    copyTitle: string;
    onClose: (evt: React.MouseEvent<HTMLElement>) => void;
    timeToClose: number;
    isOpen: boolean;
};
export declare const Header: ({ appIconPath, copySubtitle, copyTitle, onClose, timeToClose, isOpen, }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
