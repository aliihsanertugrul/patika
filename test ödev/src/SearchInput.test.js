import { render, screen } from "@testing-library/react";
import SearchInput from "./SearchInput";
import '@testing-library/jest-dom';


describe("search input testing",()=>{
    let input;

    beforeEach(()=>{
        render(<SearchInput/>)
        input=screen.getByLabelText("inputTest")
    })

    test("input dökümanda var mı",()=>{
        expect(input).toBeInTheDocument();
    })

    
})