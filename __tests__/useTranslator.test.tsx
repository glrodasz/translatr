import {beforeEach, describe, expect, vi, it} from "vitest"
import {renderHook, act, waitFor} from "@testing-library/react"
import useTranslator from "@/hooks/useTranslator"

let hookInstance : any;
describe("[ hooks / useTranslator]", () => {
    beforeEach(() => {
        hookInstance = renderHook(() => useTranslator())
    })
        it("inputText should be defined", () => {
            expect(hookInstance.result.current.inputText).toBeDefined()
    })
    it("translatedText should be defined", () => {
        expect(hookInstance.result.current.translatedText).toBeDefined()
})
it("fetch should be called when textInput changes", () => {
    Object.defineProperty(window, "fetch", {value: vi.fn(() => 'hola')})
    vi.useFakeTimers()
    act( () => {
        hookInstance.result.current.handleInputChange({target: {value: "hello"}})
    })
    vi.advanceTimersByTime(500)
    expect(fetch).toHaveBeenCalled()
})
it("fetch should be called only once when text changed multiple times before 500ms", () => {
    Object.defineProperty(window, "fetch", {value: vi.fn(() => 'hola')})
    vi.useFakeTimers()
    act( () => {
        hookInstance.result.current.handleInputChange({target: {value: "hello"}})
    })
    vi.advanceTimersByTime(400)
    act( () => {
        hookInstance.result.current.handleInputChange({target: {value: "paco"}})
    })
    vi.advanceTimersByTime(450)
    act( () => {
        hookInstance.result.current.handleInputChange({target: {value: "parcero"}})
    })
    vi.advanceTimersByTime(230)
    act( () => {
        hookInstance.result.current.handleInputChange({target: {value: "final"}})
    })
    vi.advanceTimersByTime(500)
    expect(fetch).toHaveBeenCalledTimes(1)
})
it("should put fetched text in translated text state", async () => {
    Object.defineProperty(window, "fetch", {value: () => Promise.resolve(
        {
            json: () => Promise.resolve({translatedText: "hola"}),
            ok: true
        }
    )})
    vi.useFakeTimers()
    act( () => {
        hookInstance.result.current.handleInputChange({target: {value: "hello"}})
    })
    vi.advanceTimersByTime(500)
    await waitFor(() => expect(hookInstance.result.current.translatedText).toBe("hola"))
})
})