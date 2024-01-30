import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'

describe("app testleri",()=>{
    let input;
    
    beforeEach(()=>{
        render(<App/>)
        input=screen.getByLabelText("inputTest")
    })

    test("inputa girilen değer ekranda yazılıyor mu",()=>{
        //inputu doldur
        const value="Grinning";
        userEvent.type(input,value)

        //ekranda bekle
        expect(screen.getByText(value)).toBeInTheDocument();
    })
})