package com.cogging.cogging.controller;

import com.cogging.cogging.dto.CommunityReqDto;
import com.cogging.cogging.dto.CommunityDto;
import com.cogging.cogging.dto.CommunityUpdateDto;
import com.cogging.cogging.entity.Member;
import com.cogging.cogging.service.CommunityService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000", exposedHeaders = "X-AUTH-TOKEN")
@RestController
@RequestMapping("/api/community")
@RequiredArgsConstructor
public class CommunityController {

    private final CommunityService communityService;

    @PostMapping("/create")
    public Map<String, Integer> createCommunity(@AuthenticationPrincipal Member member, @RequestBody CommunityReqDto communityReqDto){
        return Map.of("communityId", communityService.createCommunity(member, communityReqDto));
    }

    @GetMapping("/list")
    public List<CommunityDto> getCommunityList(){
        return communityService.getCommunityList();
    }

    @PostMapping("")
    public CommunityDto getCommunity(@RequestBody Map<String, Integer> communityId){
        return communityService.getCommunity(communityId.get("id"));
    }

    @PutMapping("/update")
    public void updateCommunity(@AuthenticationPrincipal Member member, @RequestBody CommunityUpdateDto communityUpdateDto){
        communityService.updateCommunity(member, communityUpdateDto);
    }

    @DeleteMapping("/delete")
    public void deleteCommunity(@AuthenticationPrincipal Member member, @RequestBody Map<String, Integer> communityId){
        communityService.deleteCommunity(member, communityId.get("id"));
    }

}
