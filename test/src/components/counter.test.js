import { render, screen } from '@testing-library/react';
import Counter from '.';
import userEvent from '@testing-library/user-event';

describe("Counter Tests",()=>{
        let increaseBtn,decreaseBtn,count;
    beforeEach(()=>{
        console.log("her testten önce çalışacağım")
        render(<Counter/>)
         increaseBtn=screen.getByText("Increase");
         decreaseBtn=screen.getByText("Decrease");
         count=screen.getByText("0")
    })

    beforeAll(()=>{
        console.log(" en başta 1 kere çalışacağım")
    });


    afterEach(()=>{
        console.log("her testten sonra çalışacağım")
    })

    afterAll(()=>{
        console.log("En sonda bir kere çalışacağım")
    })

    test("increase btn",()=>{
        // render(<Counter/>);
        // const count=screen.getByText("0")
        // const increaseBtn=screen.getByText("Increase");
        userEvent.click(increaseBtn);
        expect(count).toHaveTextContent("1");
    });
    
    test("decrease btn",()=>{
        // render(<Counter/>);
        // const count=screen.getByText("0")
        // const decreaseBtn=screen.getByText("Decrease");
        userEvent.click(decreaseBtn);
        expect(count).toHaveTextContent("-1");
    })
})
