import { render, screen } from "@testing-library/react";
import Todo from ".";
import userEvent from "@testing-library/user-event";


describe("Todo Testleri",()=>{
    let button,input;

    beforeEach(()=>{
        render(<Todo/>)
        button=screen.getByText("Add");
        input=screen.getByLabelText("Text")
    })

    test("varsayılan olarak verilen 3 nesne render edilmeli",()=>{
        const items=screen.getAllByText(/Item/i);
        expect(items.length).toEqual(3);
    })

    test("input ve button dökümanda bulunmalı",()=>{
        expect(button).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    })

    test("inputa girilen değer listeye eklenmeli",()=>{
        //inputu doldur
        const name="ali";
        userEvent.type(input,name)

        //butona tıkla
        userEvent.click(button);

        //assertiondes
        expect(screen.getByText(name)).toBeInTheDocument();
    })
})