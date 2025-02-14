import React from 'react';
import { Fragment } from 'react';
import { Cell } from './Cell.tsx';
import { changeCell } from '../API/GameAPI.ts';

export function GameField({gameField, updateField}: {gameField:boolean[][], updateField:Function}){

    function handleCellClick(x: number, y: number){
        var fieldPromise = changeCell(x, y)
        updateField(fieldPromise)
    }

    const all_cells = gameField["gameField"].map(
        (cell_row, row_index) => {
            return (
                <div key={row_index}>
                    {cell_row.map((cell, col_index) => {
                        var state:boolean = cell.state
                        return (
                            <Fragment key={row_index + "" + col_index}>
                                <Cell state={state} handleCellClick={() => handleCellClick(col_index, row_index)}/>
                            </Fragment>
                        ) 
                    })}
                </div>
            )
    })

    return (
        <div>
            {all_cells}
        </div>
    )
}