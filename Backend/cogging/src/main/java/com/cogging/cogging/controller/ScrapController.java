package com.cogging.cogging.controller;

import com.cogging.cogging.dto.MemberSingUpDto;
import com.cogging.cogging.entity.Member;
import com.cogging.cogging.entity.Scrap;
import com.cogging.cogging.service.PlaceService;
import com.cogging.cogging.service.ScrapService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000", exposedHeaders = "X-AUTH-TOKEN")
@RestController
@RequestMapping("/api/scrap")
@RequiredArgsConstructor
public class ScrapController {

    private final ScrapService scrapService;

    @PostMapping("/{placeId}")
    public void createScrap(@AuthenticationPrincipal Member member, @PathVariable("placeId") int placeId){
        scrapService.createScrap(member,  placeId);
    }
}
