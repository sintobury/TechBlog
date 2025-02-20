import { JSX, PropsWithChildren } from "react";

type CalloutType = 'info' | 'warn' | 'block';

interface CalloutProps extends PropsWithChildren {
    type?: CalloutType;
    title?: string;
}

const Info = () => (
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px">
        <path fill="#2196f3" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"/>
        <path fill="#fff" d="M22 22h4v11h-4V22zM26.5 16.5c0 1.379-1.121 2.5-2.5 2.5s-2.5-1.121-2.5-2.5S22.621 14 24 14 26.5 15.121 26.5 16.5z"/>
    </svg>
)

const Warn = () => (
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 72 72" width="48px" height="48px">
        <path fill="#ffe551" d="M30.16,11.51,6.84,51.9a2.13,2.13,0,0,0,1.84,3.19H55.32a2.13,2.13,0,0,0,1.84-3.19L33.84,11.51A2.13,2.13,0,0,0,30.16,11.51Z"/>
        <path fill="#353535" d="M29,46a3,3,0,1,1,3,3A2.88,2.88,0,0,1,29,46Zm1.09-4.66-.76-15h5.26l-.73,15Z"/>
    </svg>
)

const Block = () => (
    <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='none' viewBox='0 0 384 512'>
        <path fill='currentColor'd='M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z'
        />
    </svg>
)

interface designType {
    [key: string] : {
        icon: () => JSX.Element;
        boxCss: string;
    }
} 

const designData: designType = {
    info : {
        icon: Info,
        boxCss: 'text-foreground bg-info',
    },
    warn : {
        icon: Warn,
        boxCss: 'text-foreground bg-warn',
    },
    block : {
        icon: Block,
        boxCss: 'text-foreground bg-box',
    }
}

export const Callout = (props: CalloutProps) => {
    const type = props.type || 'block'
    const calloutData = designData[type]
    const CalloutIcon = calloutData.icon;
    return  (
        <div className={`flex items-center gap-3 rounded-md px-4 py-3 ${calloutData.boxCss}`}>
            {type !== 'block' && (
                <div>
                    <CalloutIcon />
                </div>
            )}
            <div className="callout-text flex-1">
                {props.title && <span className="font-bold">{props.title}</span>}
                {props.children}
            </div>
        </div>
    )
}
