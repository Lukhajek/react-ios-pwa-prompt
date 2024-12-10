type Props = {
    appIconPath?: string;
    copyAddToHomeScreenStep?: string;
    copyDescription?: string;
    copyShareStep?: string;
    copySubtitle?: string;
    copyTitle?: string;
    delay?: number;
    promptOnVisit?: number;
    timesToShow?: number;
    onClose?: () => void;
    isShown?: boolean;
    timeToClose?: number;
};
declare const PWAPrompt: ({ appIconPath, copyAddToHomeScreenStep, copyDescription, copyShareStep, copySubtitle, copyTitle, delay, isShown, onClose, promptOnVisit, timesToShow, timeToClose, }: Props) => import("react/jsx-runtime").JSX.Element | null;
export default PWAPrompt;
