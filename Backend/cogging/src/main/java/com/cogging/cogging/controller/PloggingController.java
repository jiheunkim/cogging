package com.cogging.cogging.controller;

import com.cogging.cogging.dto.*;
import com.cogging.cogging.entity.Member;
import com.cogging.cogging.entity.Plogging;
import com.cogging.cogging.service.PloggingService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000", exposedHeaders = "X-AUTH-TOKEN")
@RequestMapping("/api/plogging")
@RequiredArgsConstructor
public class PloggingController {

    private final PloggingService ploggingService;

    @PostMapping("/create")
    public Map<String, Integer> createPlogging(@AuthenticationPrincipal Member member, @RequestBody PloggingCreateDto ploggingCreateDto){
        return Map.of("ploggingId", ploggingService.createPlogging(member, ploggingCreateDto));
    }

    @PostMapping("/list")
    public List<PloggingListDto> getPloggingList(@RequestBody Map<String, Integer> ploggingId){
        return ploggingService.getPloggingList(ploggingId.get("id"));
    }

    @PostMapping("")
    public PloggingDto getPlogging(@RequestBody Map<String, Integer> ploggingId){
        return ploggingService.getPlogging(ploggingId.get("id"));
    }

    @PostMapping("/join")
    public void joinPlogging(@AuthenticationPrincipal Member member,
                                    @RequestBody Map<String, Integer> ploggingId){
        ploggingService.joinPlogging(member, ploggingId.get("id"));
    }

    @DeleteMapping("/join")
    public void deleteJoinPlogging(@AuthenticationPrincipal Member member,
                                            @RequestBody Map<String, Integer> ploggingId){
        ploggingService.deleteJoinPlogging(member, ploggingId.get("id"));
    }
}
