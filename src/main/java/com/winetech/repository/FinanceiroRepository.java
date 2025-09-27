// src/main/java/com/winetech/repository/FinanceiroRepository.java
package com.winetech.repository;

import com.winetech.model.Financeiro;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FinanceiroRepository extends JpaRepository<Financeiro, Long> {
}
