import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AnimalDetailsComponent } from "./animal-details.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe("AnimalDetailsComponent", () => {
    let component: AnimalDetailsComponent;
    let fixture: ComponentFixture<AnimalDetailsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AnimalDetailsComponent],
            imports: [RouterTestingModule, HttpClientTestingModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AnimalDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
