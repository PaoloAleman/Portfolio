export const ToolTip = (props :{image: string, altImage: string, dataTip: string}) => {
    return (
        <div className="tooltip" data-tip={props.dataTip}>
            <img src={props.image} alt={props.altImage} className={'w-8 h-8 cursor-pointer bg-[#310000]'} />
        </div>
    )
}