import './ContentWrapper.scss';

export const ContentWrapper = (props: any) => {
    const { children } = props;
    console.log("🚀 ~ file: ContentWrapper.tsx ~ line 5 ~ ContentWrapper ~ children", children)
    return (
        <div className="contentwrapper">
            <div className='content'>
                {children}
            </div>
        </div>
    );
}