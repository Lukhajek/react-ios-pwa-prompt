type Props = {
    promptOnVisit: number;
    timesToShow: number;
    isShown?: boolean;
};
export declare const useShouldShowPrompt: ({ promptOnVisit, timesToShow, isShown, }: Props) => {
    shouldShowPrompt: boolean | undefined;
};
export {};
