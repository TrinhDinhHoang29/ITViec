

const RangeValue = ({values})=>{
    return (<>
        {values[0].toLocaleString()}$ - {values[1].toLocaleString()}$
    </>);
}

export default RangeValue;