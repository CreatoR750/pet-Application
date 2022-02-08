import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AddAnimalComponent } from "./add-animal.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { FormsModule } from "@angular/forms";

describe("AddAnimalComponent", () => {
    let component: AddAnimalComponent;
    let fixture: ComponentFixture<AddAnimalComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AddAnimalComponent],
            imports: [
                RouterTestingModule,
                HttpClientTestingModule,
                FormsModule,
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AddAnimalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
