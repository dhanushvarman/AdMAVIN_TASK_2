import React from 'react'
import { DataState } from './DataContext';

function LevelThree() {
    const { detailsTwo,detailsThree, setDetailsThree } = DataState();

    return (
        <div className='col-md-4'>
            {detailsTwo.length === 0 ? <div class="card">
                <div class="card-body">
                    No path Selected
                </div>
            </div>
                :
                <div class="list-group">
                    {
                        detailsTwo.child.map((value, index) => {
                            return <button key={value.text} type="button" 
                            class={`list-group-item list-group-item-action`}
                            onClick={() => setDetailsThree(value)}
                            style={{ backgroundColor: `${detailsThree === value ? "gray" : ""}`, color: `${detailsThree === value ? "white" : ""}` }}
                            aria-current="true">
                                {value.text}
                            </button>
                        })
                    }
                </div>
            }
        </div>
    )
}

export default LevelThree