import { render, screen } from "@testing-library/react"
import Header from "./Header"
import '@testing-library/jest-dom';



describe("emoji search",()=>{
let title,img;
    beforeEach(()=>{
        render(<Header/>)
        title=screen.getByText("Emoji Search")
        img=screen.getByAltText("img1")
    })

    test("img ve title dökumanda bulunmali",()=>{
        expect(title).toBeInTheDocument();
        expect(img).toBeInTheDocument();
    })
})