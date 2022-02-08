import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AnimalService } from "./animal.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

describe("AnimalService", () => {
    let service: AnimalService;
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpClientTestingModule],
            providers: [RouterTestingModule],
        });

        service = TestBed.inject(AnimalService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
