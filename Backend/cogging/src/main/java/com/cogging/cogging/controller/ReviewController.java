package com.cogging.cogging.controller;

import com.cogging.cogging.dto.PloggingCreateDto;
import com.cogging.cogging.dto.ReviewCreateDto;
import com.cogging.cogging.dto.ReviewDto;
import com.cogging.cogging.entity.Member;
import com.cogging.cogging.service.PloggingService;
import com.cogging.cogging.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000", exposedHeaders = "X-AUTH-TOKEN")
@RequestMapping("/api/review")
@RequiredArgsConstructor
public class ReviewController {

    private final ReviewService reviewService;

    @PostMapping("/create")
    public Map<String, Integer> createReview(@AuthenticationPrincipal Member member, @RequestBody ReviewCreateDto ReviewCreateDto){
        return Map.of("reviewId", reviewService.createReview(member, ReviewCreateDto));
    }

    @PostMapping("/list")
    public List<ReviewDto> getReviewList(@RequestBody Map<String, Integer> placeId){
        return reviewService.getReviewList(placeId.get("id"));
    }
}
