import { Selector } from "testcafe";

fixture("App test").page("http://localhost:4200/pets");

test("Add animal test", async (t) => {
    await t.click("#add-button");
    await t.typeText("#name", "Тест");
    await t.typeText("#type", "Черепаха");
    await t.typeText("#color", "Зеленая");
    await t.typeText("#age", "5");
    await t.click("#save-button");
});

test("Delete Animal test", async (t) => {
    const buttons = Selector("li").find("button");
    await t.click(buttons);
});

test("Edit animal", async (t) => {
    const button = Selector("li").find("a");
    await t.click(button);
    await t.click("#animal-age");
    await t.pressKey("ctrl+a delete");
    await t.typeText("#animal-age", "3");
    await t.click("#change-button");
});
