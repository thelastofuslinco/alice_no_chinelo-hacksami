import {
    useImperativeHandle,
    forwardRef,
    useCallback,
    useEffect,
    useState
} from 'react'
import { createPortal } from 'react-dom'
import { ModalBody, ModalClose, ModalContainer, ModalOverlay } from './index.style'
const modalElement = document.getElementById('modal-root')

const Modal = ({ fade = false, children, defaultOpened = false }, ref) => {
    const [isOpen, setIsOpen] = useState(defaultOpened)

    const close = useCallback(() => setIsOpen(false), [])

    useImperativeHandle(ref, () => ({
        open: () => setIsOpen(true),
        close: () => setIsOpen(false)
    }), [])

    const handleEscape = useCallback(event => {
        if (event.keyCode === 27) close()
    }, [close])

    useEffect(() => {
        if (isOpen) document.addEventListener('keydown', handleEscape, false)
        return () => {
            document.removeEventListener('keydown', handleEscape, false)
        }
    }, [handleEscape, isOpen])

    return createPortal(
        isOpen
            ? (
                <ModalContainer fade={fade}>
                    <ModalOverlay aria-hidden onClick={close} />
                    <ModalBody>
                        <ModalClose role="button" aria-label="close" onClick={close}>x</ModalClose>
                        {children}
                    </ModalBody>
                </ModalContainer>
            )
            : null,
        modalElement
    )
}

export default forwardRef(Modal)
