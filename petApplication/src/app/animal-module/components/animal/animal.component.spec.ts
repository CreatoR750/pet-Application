import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AnimalComponent } from "./animal.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("AnimalComponent", () => {
    let component: AnimalComponent;
    let fixture: ComponentFixture<AnimalComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AnimalComponent],
            imports: [RouterTestingModule, HttpClientTestingModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AnimalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
