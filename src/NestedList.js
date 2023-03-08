import React from 'react'
import { DataState } from './DataContext'
import LevelThree from './LevelThree';
import LevelTwo from './LevelTwo';

function NestedList() {

    const { arts, setDetails, details, detailsTwo, setDetailsTwo, detailsThree, setDetailsThree } = DataState();

    const handleClick = (value) => {
        setDetailsTwo([]);
        setDetailsThree([]);
        setDetails(value);
    }

    return (
        <>
            <div className='container' style={{marginTop:"80px"}}>
                <div className='row'>
                    <div className='col-md-2'>

                    </div>
                    <div className='col-md-8 mb-4'>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">path \</span>
                            <div type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" disabled>
                                {details.length == 0 ? "" : details.text}
                                {details.length == 0 ? "" : <i class="fa-solid fa-caret-right m-2"></i>}
                                {detailsTwo.length == 0 ? "" : detailsTwo.text}
                                {detailsTwo.length == 0 ? "" : <i class="fa-solid fa-caret-right m-2"></i>}
                                {detailsThree.length == 0 ? "" : detailsThree.text}
                            </div>
                        </div>
                    </div>

                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <div class="list-group">
                            {
                                arts.map((value, index) => {
                                    return <button key={value.text} type="button"
                                        onClick={() => handleClick(value)}
                                        class={`list-group-item list-group-item-action ${details === value ? "active" : ""}`} aria-current="true">
                                        {value.text}
                                    </button>
                                })
                            }
                        </div>
                    </div>
                    <LevelTwo />
                    <LevelThree />
                </div>
            </div>
        </>
    )
}

export default NestedList