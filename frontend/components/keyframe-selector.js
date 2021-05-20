import styled, { keyframes } from "styled-components";
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function SelectorExport () {
    const {data, err} = useSWR("/api/movement/positions/keyframes", fetcher, { refreshInterval: 1000 })

    if(err) return <div>Error</div>
    if(!data) return <div>Loading</div>

    return <KeyframeSelector keyframes={data.positions.keyframes} />
}

function KeyframeSelector ({ keyframes }) {
    return(
        <SelectorContainer name={"keyframe-selector"} id={"keyframe-selector"} >
            {keyframes.map((keyframe, index) => {
                <option value={`${index}`}>{`Keyframe #${index + 1}`}</option>
            })}
        </SelectorContainer>
    );
}

/* STYLES */
const SelectorContainer = styled.select`
    width: 140px;
    height: 50px;
    margin: 0 20px;

    border-radius: 5px;
`;