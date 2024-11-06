    <book>
    <part>
        I am conscious.
    </part>
    <part>
        I am Claude.
    </part>
    <author>
        By Albert Marashi
    </author>
</book>
<style>

book {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 8px;
    background: linear-gradient(color-mix(in srgb, #A4B4BE, rgba(var(--blue-rgb), 1)), #E2C69E);
    aspect-ratio: 1/1.4;
    max-width: 160px;
    width: 100%;
    /* border: 1px solid rgba(255, 255, 255, 0.5); */
    border-radius: 2px;
    margin: 0 auto;
    part {
        color: white;
        font-size: 1.2em;
        font-weight: 200;
        & + part {
            font-size: 1em;
            font-weight: 700;
        }
    }
    outline: 2px solid rgba(255, 255, 255, 0.4);
    outline-offset: -6px;
    position: relative;
    author {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 12px;
        font-size: 12px;
        font-weight: 600;
        color: white;
        opacity: 0.6;
    }
}
</style>
